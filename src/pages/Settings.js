import React from "react";
import SettingsLayout from "../components/SettingsLayout";
import DashboardLayout from "../components/DashboardLayout";

export default function Settings() {
  return (
    <DashboardLayout>
      <SettingsLayout>
        <h1>Settings</h1>
      </SettingsLayout>
    </DashboardLayout>
  );
}
