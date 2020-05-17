import React, { useEffect, useState, useMemo } from 'react'
import copy from 'clipboard-copy'
import useLotusClient from '../lib/use-lotus-client'
import useWatchDefaultWallet from '../lib/use-watch-default-wallet'
//import useMiners from '../lib/use-miners'
import annotations from '../annotations'
import DealList from '../08-deals/deal-list'

export default function ProposeDeal ({ appState, updateAppState }) {
  const { selectedNode, filterNewMiners } = appState
  const client = useLotusClient(selectedNode, 'node')
  // const [miners, annotations] = useMiners(client)
  const miners = Object.keys(annotations)
  const balance = useWatchDefaultWallet({ client, updateAppState })
  const [objectUrlAttribute, setObjectUrlAttribute] = useState()
  const [status, setStatus] = useState()
  const {
    versionInfo,
    cid,
    importedNode,
    defaultWalletAddress,
    capture: { width, height }
  } = appState
  const blockDelay = versionInfo && versionInfo.BlockDelay
  const epochPrice = '2500'

  const filteredMiners = useMemo(() => {
    if (filterNewMiners && miners) {
      return miners.filter(miner => annotations[miner].match(/^new/))
    }
    return miners
  }, [miners, filterNewMiners])

  useEffect(() => {
    const objectUrl = URL.createObjectURL(appState.capture.blob)
    setObjectUrlAttribute({ src: objectUrl })
    return () => {
      setObjectUrlAttribute(null)
      URL.revokeObjectURL(objectUrl)
    }
  }, [appState.capture])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h2 style={{ marginBottom: '1rem' }}>Propose a Storage Deal</h2>
      <h4>1. Imported image to node #{importedNode}</h4>
      <div style={{ display: 'flex' }}>
        <div style={{ border: '1px solid black', height }}>
          <img alt='' width={width} height={height} {...objectUrlAttribute} />
        </div>
        <div style={{ padding: '1rem' }}>
          <div>{appState.capture.blob.size} bytes</div>
          <button
            onClick={() => {
              updateAppState(draft => {
                delete draft.capture
                delete draft.cid
                delete draft.importedNode
              })
            }}
          >
            Retake
          </button>
        </div>
      </div>
      <h4>2. A few more details to include in our storage deal proposal</h4>
      <div style={{ textAlign: 'left', fontSize: '80%' }}>
        <div>
          CID:{' '}
          <span style={{ fontSize: '70%' }}>
            {cid} {cid && <button onClick={copyCid}>Copy</button>}
            <br />
          </span>
          <span style={{ fontSize: '70%' }}>
            Generated by hashing your file, same as IPFS CID
            <br />
            <br />
          </span>
        </div>
        <div>
          Wallet address:{' '}
          <span style={{ fontSize: '50%' }}>{defaultWalletAddress}</span>
        </div>
        <div>
          Balance: {typeof balance !== 'undefined' && balance.toFil()} FIL
        </div>
      </div>
      <h4>3. Click a miner to propose a deal</h4>
      <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
        <label>
          <input
            type='checkbox'
            checked={filterNewMiners}
            onChange={() => {
              updateAppState(draft => {
                draft.filterNewMiners = !filterNewMiners
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          Filter only miners with 'new' annotation
        </label>
      </div>
      <div style={{ height: '15rem', overflowY: 'scroll', width: '70vw' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {filteredMiners &&
            filteredMiners.map(miner => {
              return (
                <button
                  key={miner}
                  style={{ width: '20rem', height: '2rem' }}
                  onClick={() => proposeDeal(miner)}
                >
                  {miner}: {annotations[miner]}
                </button>
              )
            })}
        </div>
      </div>
      <div>{status}</div>
      <br />
      <h4>Deals we've made for this data:</h4>
      <DealList
        client={client}
        appState={appState}
        updateAppState={updateAppState}
        cid={cid}
      />
    </div>
  )

  async function copyCid () {
    console.log('Copying to clipboard', cid)
    await copy(cid)
    console.log('Copied.')
  }

  async function proposeDeal (targetMiner) {
    const dataRef = {
      Data: {
        TransferType: 'graphsync',
        Root: {
          '/': cid
        },
        PieceCid: null,
        PieceSize: 0
      },
      Wallet: defaultWalletAddress,
      Miner: targetMiner,
      EpochPrice: epochPrice,
      MinBlocksDuration: 7 * 24 * 60 * 60 / blockDelay
    }
    setStatus(`Proposing to ${targetMiner} ...`)
    try {
      const result = await client.clientStartDeal(dataRef)
      const { '/': proposalCid } = result
      setStatus(`Proposed! ${targetMiner}`)
      updateAppState(draft => {
        draft.proposalCid = proposalCid
        if (!draft.deals) {
          draft.deals = []
        }
        draft.deals.push({
          type: 'camera',
          proposalCid,
          date: Date.now(),
          fromNode: selectedNode,
          miner: targetMiner,
          cid
          // FIXME: Block height
          // FIXME: Local blob, size
        })
      })
    } catch (e) {
      setStatus(`Error ${targetMiner}: ` + e.message)
      console.log('Exception', e)
    }
  }
}
