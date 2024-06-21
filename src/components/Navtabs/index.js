import './index.css'

const NavTabs = props => {
  const {tabsList, activeTabId, setActiveTab} = props

  return (
    <ul className="tabs-container">
      {tabsList.map(tab => (
        <li
          className={`tab-item ${activeTabId === tab.tabId ? 'active' : ''}`}
          key={tab.tabId}
        >
          <button
            type="button"
            className="tab-btn"
            onClick={() => setActiveTab(tab.tabId)}
          >
            {tab.displayText}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default NavTabs
