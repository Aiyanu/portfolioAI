import React from "react";

export default function Work() {
  return (
    <main>
      <progress className="progress progress-primary" value={70} max={100}>
        70
      </progress>
      <div className="radial-progress" style={{ "--value": 0 }}>
        0%
      </div>
      <div className="radial-progress" style={{ "--value": 20 }}>
        20%
      </div>
      <div className="radial-progress" style={{ "--value": 60 }}>
        60%
      </div>
      <div className="radial-progress" style={{ "--value": 80 }}>
        80%
      </div>
      <div className="radial-progress" style={{ "--value": 100 }}>
        100%
      </div>
      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </main>
  );
}
