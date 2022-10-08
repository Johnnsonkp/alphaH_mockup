import "./header.css";

import AnnouncementBar from "./AnnouncementBar";
import { HeaderContent } from "./HeaderContent";
import NavSection from "./Nav";

export default function HeaderSection() {
  return (
    <header className="header-section" id="heroBanner">
      <AnnouncementBar />
      <NavSection />
      <HeaderContent />
    </header>
  );
}
