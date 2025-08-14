'use client';

import React, { useState } from 'react';

import styles from './DashboardClient.module.css';
import { DashboardDocument } from '../../../../../../prismicio-types';
import AnalyzeField from '@/app/components/FormComponents/AnalyzeField/AnalyzeField';

type DashboardProps = {
  page: DashboardDocument;
};

export default function DashboardClient({ page }: DashboardProps) {
  const [selectedItem, setSelectedItem] = useState(
    page.data.sidebar[0]?.label?.toLowerCase() || ''
  );

  console.log(page);

  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebar}>
          {page.data.sidebar.map((item, index) => (
            <button
              key={index}
              className={`${styles.sidebarButton} ${
                selectedItem === item.label?.toLowerCase() ? styles.active : ''
              }`}
              onClick={() => setSelectedItem(item.label?.toLowerCase() || '')}
            >
              <span>0{index + 1}</span> <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.contentContainer}>
        {/* <div style={{ marginTop: '10rem' }}>
          <AnalyzeField />
        </div> */}
      </div>
    </div>
  );
}
