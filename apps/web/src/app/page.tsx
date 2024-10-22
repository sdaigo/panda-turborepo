"use client";
import styles from "./page.module.css";

import { Button } from "@six-org/components";
import { Card } from "@six-org/objects";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <Card />
        <Button size="sm">Hello</Button>
      </main>
    </div>
  );
}
