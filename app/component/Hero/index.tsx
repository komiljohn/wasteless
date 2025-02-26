import React from "react";

import HeaderNavigation from "./HeaderNavigation";
import HeaderSocials from "./HeaderSocials";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4">
      <HeaderSocials />
      <HeaderNavigation />
    </div>
  );
}
