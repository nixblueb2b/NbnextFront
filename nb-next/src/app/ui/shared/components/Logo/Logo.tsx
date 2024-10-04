import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/home">
      <div className="w-24">
        <Image
          src="/images/Nix_blue_logo_horizontal_mix_1.png"
          width={500}
          height={500}
          alt="nixblue logo"
          priority={true}
          className="w-full"
        />
      </div>
    </Link>
  );
}

export default Logo;
