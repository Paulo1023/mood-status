import {
  PanelLeft,
  Search,
  MoreHorizontal,
  Pencil,
  ChevronDown,
  ChevronRight,
  AtSign,
  Star,
  MessageCircle,
  FilePenLine,
  CheckCircle,
  Phone,
  ArrowLeft,
} from "lucide-react";

import "./App.css";

import { useState } from "react";

export default function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [showCallMenu, setShowCallMenu] = useState(false);

  return (
    <div className="teams-container">
      {/* Top Bar */}
      <div className="topbar">

  <div className="topbar-left">
    <PanelLeft size={18} />
    <Search size={18} />
  </div>

  <div className="topbar-right">
    <MoreHorizontal size={18} />

    <div className="profile">
      <div className="avatar">BL</div>
      <CheckCircle size={16} className="online" />
    </div>
  </div>

</div>

      {/* Chat Head */}
{selectedChat ? (

      <>
        <div className="chat-screen-header">

          <div className="chat-header-left">
          <button
            className="back-btn"
            onClick={() => setSelectedChat(null)}
          >
            <ArrowLeft size={18} />
          </button>

          <div className="profile">
            <div className="chat-avatar">PG</div>
            <CheckCircle size={16} className="online" />
          </div>

          <div>
            <div className="chat-name">
              Paulo Guevarra
            </div>

            <div className="chat-status">
              Chat <ChevronDown size={12} />
            </div>
          </div>

          </div>
          <div className="chat-header-right">
            <div className="call-wrapper">

  <Phone size={18} className="call-icon" />

  <ChevronDown
    size={12}
    className="call-dropdown-trigger"
    onClick={() => setShowCallMenu(!showCallMenu)}
  />

  {showCallMenu && (
    <div className="call-menu">
      <div className="call-item">
        📹 Video call
      </div>

      <div className="call-item">
        📞 Audio call
      </div>
    </div>
  )}

</div>
          </div>


        </div>

        <div className="messages">
          <div className="message received">
            Hey 👋
          </div>

          <div className="message received">
            How are you feeling today?
          </div>
        </div>

        <div className="message-input">
          <input placeholder="Type a message" />
        </div>
      </>

    ) : (

      <>
      {/* Chat Head */}

      {/* Header */}
      <div className="header">
        <h1>Chat</h1>

        <div className="header-actions">
          <MoreHorizontal size={22} />
          <Search size={22} />
          <Pencil size={22} />
          <ChevronDown size={22} />
        </div>
      </div>

      {/* Pills */}
      <div className="tabs">
        <button className="active">Unread</button>
        <button>Channels</button>
        <button>Chats</button>
      </div>

      {/* Copilot */}
      <div className="copilot">
        <div className="copilot-icon">✦</div>
        <span>Copilot</span>
      </div>

      {/* Quick Views */}
      <div className="section">
        <div className="section-header">
          <ChevronDown size={18} />
          <span>Quick views</span>
        </div>

        <div className="menu-item">
          <AtSign size={22} />
          <span>Mentions</span>
        </div>

        <div className="menu-item">
          <FilePenLine size={22} />
          <span>Drafts</span>
        </div>
      </div>

      {/* Favorites */}
      <div className="section">
        <div className="section-header">
          <ChevronDown size={18} />
          <Star size={20} />
          <span>Favorites</span>
        </div>

        <div className="chat-user" onClick={() => setSelectedChat("paulo")}>
          <div className="profile">
            <div className="chat-avatar">PG</div>
            <CheckCircle size={16} className="online" />
          </div>
          {/* <div className="chat-avatar">PG </div> */}
          

          <div className="chat-details">
            <div className="chat-name">Paulo Guevarra</div>
            <div className="chat-preview">How are you feeling today?</div>
          </div>

        </div>
      </div>

      {/* Chats */}
      <div className="section">
        <div className="section-header">
          <ChevronRight size={18} />
          <MessageCircle size={20} />
          <span>Chats</span>
        </div>

      </div>
      </>
    )}
    </div>
  );
}