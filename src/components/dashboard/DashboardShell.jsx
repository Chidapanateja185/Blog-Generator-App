import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../css/dashboard.css";
import Topbar from "../common/topbar"


import Toast from "../common/Toast";
import Sidebar from "../common/Sidebar";
import OverviewPanel from "./panels/OverviewPanel";
import MyBlogsPanel from "./panels/MyBlogsPanel";
import GeneratePanel from "./panels/GeneratePanel";
import TopicsPanel from "./panels/TopicsPanel";
import CommunityPanel from "./panels/CommunityPanel";
import Explore from "../../pages/Explore";
import ProfilePanel from "./panels/ProfilePanel";
import SettingsPanel from "./panels/SettingsPanel";


export default function Dashboard({ user: initialUser, onLogout }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialUser || null);
  const [activePanel, setActivePanel] = useState("overview");
  const [toast, setToast] = useState(null);
  const [followersCount, setFollowersCount] = useState(128);
  const [followingCount, setFollowingCount] = useState(64);

  const PANEL_TITLES = {
    overview: "Overview", myblogs: "My Blogs", generate: "Generate Blog",
    topics: "Topics", community: "Community", exploreblogs: "Explore Blogs", profile: "Profile", settings: "Settings",
  };

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/");
    showToast("Signed out successfully.", "success");
  };

  useEffect(() => {
    //if (!user) navigate("/welcome");
  }, [user, navigate]);

  return (
    <div className="db-root">
      <Toast toast={toast}/>
      <Sidebar user={user} activePanel={activePanel} onSwitch={setActivePanel} onLogout={handleLogout}/>
      <div className="db-main">
        
        <Topbar
          title={PANEL_TITLES[activePanel] || activePanel}
          onNewBlog={() => setActivePanel("generate")}
        />
        
        <div className="db-content">
          {activePanel === "overview"  && <OverviewPanel onSwitch={setActivePanel}/>}
          {activePanel === "myblogs"   && <MyBlogsPanel showToast={showToast}/>}
          {activePanel === "generate"  && <GeneratePanel showToast={showToast}/>}
          {activePanel === "topics"    && <TopicsPanel showToast={showToast}/>}
          {activePanel === "community" && <CommunityPanel followersCount={followersCount} followingCount={followingCount} showToast={showToast}/>}
          {activePanel === "exploreblogs" && (<Explore />)}
          {activePanel === "profile"   && (
            <ProfilePanel
              user={user} 
              setUser={setUser} 
              showToast={showToast}
              followersCount={followersCount} 
              setFollowersCount={setFollowersCount}
              followingCount={followingCount} 
              setFollowingCount={setFollowingCount}
            />
          )}
          {activePanel === "settings"  && <SettingsPanel showToast={showToast}/>}
        </div>
      </div>
    </div>
  );
}