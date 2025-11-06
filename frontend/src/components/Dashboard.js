
import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('home');
  const [transferAmount, setTransferAmount] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');

  const transactions = [
    { id: 1, type: 'received', amount: 5000, from: 'Maria Santos', date: '2024-01-15' },
    { id: 2, type: 'sent', amount: 2000, to: 'Grocery Store', date: '2024-01-14' },
    { id: 3, type: 'received', amount: 15000, from: 'Salary Deposit', date: '2024-01-10' },
    { id: 4, type: 'sent', amount: 3000, to: 'Electric Bill', date: '2024-01-08' },
  ];

  const handleTransfer = (e) => {
    e.preventDefault();
    alert(`Transfer of ₱${transferAmount} to ${recipientAccount} initiated!`);
    setTransferAmount('');
    setRecipientAccount('');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h2>⭐ STAR MOBILE BANK</h2>
            <p className="user-name">{user.name}</p>
          </div>
          <button onClick={onLogout} className="logout-button">Logout</button>
        </div>

        {/* Balance Card */}
        <div className="balance-card">
          <p className="balance-label">Available Balance</p>
          <h1 className="balance-amount">₱{user.balance.toLocaleString('en-PH', { minimumFractionDigits: 2 })}</h1>
          <p className="account-number">Account: {user.accountNumber}</p>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="action-btn" onClick={() => setActiveTab('transfer')}>
            <span className="action-icon">💸</span>
            <span>Transfer</span>
          </button>
          <button className="action-btn" onClick={() => setActiveTab('bills')}>
            <span className="action-icon">📄</span>
            <span>Pay Bills</span>
          </button>
          <button className="action-btn" onClick={() => setActiveTab('history')}>
            <span className="action-icon">📊</span>
            <span>History</span>
          </button>
          <button className="action-btn" onClick={() => alert('Load feature coming soon!')}>
            <span className="action-icon">📱</span>
            <span>Buy Load</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {activeTab === 'home' && (
            <div className="recent-transactions">
              <h3>Recent Transactions</h3>
              {transactions.map(tx => (
                <div key={tx.id} className="transaction-item">
                  <div className="transaction-icon">
                    {tx.type === 'received' ? '⬇️' : '⬆️'}
                  </div>
                  <div className="transaction-details">
                    <p className="transaction-name">
                      {tx.type === 'received' ? `From: ${tx.from}` : `To: ${tx.to}`}
                    </p>
                    <p className="transaction-date">{tx.date}</p>
                  </div>
                  <div className={`transaction-amount ${tx.type}`}>
                    {tx.type === 'received' ? '+' : '-'}₱{tx.amount.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'transfer' && (
            <div className="transfer-form">
              <h3>Transfer Money</h3>
              <form onSubmit={handleTransfer}>
                <div className="form-group">
                  <label>Recipient Account Number</label>
                  <input
                    type="text"
                    value={recipientAccount}
                    onChange={(e) => setRecipientAccount(e.target.value)}
                    placeholder="Enter account number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Amount</label>
                  <input
                    type="number"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    placeholder="Enter amount"
                    min="1"
                    required
                  />
                </div>
                <button type="submit" className="submit-button">
                  Send Money
                </button>
              </form>
            </div>
          )}

          {activeTab === 'bills' && (
            <div className="bills-section">
              <h3>Pay Bills</h3>
              <div className="biller-list">
                <div className="biller-item">💡 Electric Company</div>
                <div className="biller-item">💧 Water Utility</div>
                <div className="biller-item">📡 Internet Provider</div>
                <div className="biller-item">📞 Telecom</div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="history-section">
              <h3>Transaction History</h3>
              {transactions.map(tx => (
                <div key={tx.id} className="history-item">
                  <div className="history-details">
                    <p className="history-name">
                      {tx.type === 'received' ? tx.from : tx.to}
                    </p>
                    <p className="history-date">{tx.date}</p>
                  </div>
                  <div className={`history-amount ${tx.type}`}>
                    {tx.type === 'received' ? '+' : '-'}₱{tx.amount.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
