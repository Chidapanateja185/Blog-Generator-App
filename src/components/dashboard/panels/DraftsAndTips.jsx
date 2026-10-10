import React from 'react'
import {DRAFTS, TIPS} from "../../../data/dashboardData";
import "./GeneratePanel.css";


function ContinueDraftCard({drafts = DRAFTS, onViewAll, onContinue, onStart}) {
    return (
        <div className="draftCard">
            <div className="draftCardHeader">
                 <h3 className="draftCardTitle">📄 Continue a Draft</h3>
                <button type="button" className="draftViewAll" onClick={onViewAll}>
                View all
                </button>
            </div>
            <div className="draftList">
                {drafts.map((draft) => (
                    <div key={draft.key} className="draftRow">
                        <div className="draftIcon">📝</div>
                        <div className="draftInfo">
                             <p className="draftTitle">{draft.title}</p>
                            <p className="draftMeta">
                                {draft.editedAt} · {draft.words} words
                            </p>
                        </div>
                        <button
                            type="button"
                            className="draftContinue"
                            onClick={() => onContinue?.(draft)}
                        >
                            Continue →
                        </button>
                    </div>
                ))}
            </div>
            <div className="draftStartWrap">
                <button type="button" className="draftStartBtn" onClick={onStart}>
                    Start
                </button>
            </div>
         </div>
    )
}

function TipsCard({tips = TIPS}) {
    return (
        <div className="tipsCard">
            <h3 className="tipsTitle">💡 Tips for a Great Post</h3>
            <div className="tipsList">
                {tips.map((tip, index) => (
                    <div key={index} className="tipRow">
                        <span className="tipNumber">{index + 1}</span>
                        <p className="tipText">{tip}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


function DraftsAndTips({ drafts, tips, onViewAllDrafts, onContinueDraft, onStartDraft }) {
  return (
    <div className="draftGrid">
      <ContinueDraftCard
        drafts={drafts}
        onViewAll={onViewAllDrafts}
        onContinue={onContinueDraft}
        onStart={onStartDraft}
      />
      <TipsCard tips={tips} />
    </div>
  )
}

export default DraftsAndTips
