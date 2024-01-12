import React from "react";
import styles from "../styles/Gameplay.module.css";
import Image from "next/image";

const HuntShard = (
  <div className={styles.slide}>
    <Image src="/hunt_shard.gif" height="48" width="48" alt="blue-crystal" />
  </div>
);

type Props = {
  equippedTools: boolean;
};

export default function GameplayAnimation({ equippedTools }: Props) {
  if (!equippedTools) {
    return <div style={{ marginLeft: 8 }}>I need buildings</div>;
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {HuntShard}
        {HuntShard}
        {HuntShard}
        {HuntShard}
        {HuntShard}
        {HuntShard}
        {HuntShard}
        {HuntShard}
        {HuntShard}
        {HuntShard}
        {HuntShard}
        {HuntShard}
        {HuntShard}
      </div>
    </div>
  );
}
