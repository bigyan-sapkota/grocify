import ClearCompleteButton from "@/components/insights/clear-complete-button";
import InsightsCategory from "@/components/insights/insights-categroy";
import InsightsPriority from "@/components/insights/insights-priority";
import InsightsStats from "@/components/insights/insights-stats";
import SentryFeedbackButton from "@/components/insights/sentry-feedback-button";
import UserProfile from "@/components/insights/user-profile";
import TabScreenBackground from "@/components/tab-screen-background";
import { ScrollView } from "react-native";

export default function InsightsScreen() {
  return (
    <>
      <ScrollView
        className="flex-1 bg-background py-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, gap: 14 }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <TabScreenBackground />
        <UserProfile />
        <InsightsStats />
        <InsightsCategory />
        <InsightsPriority />
        <ClearCompleteButton />
      </ScrollView>

      <SentryFeedbackButton />
    </>
  );
}
