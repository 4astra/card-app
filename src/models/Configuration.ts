import { StackScreenProps } from "@react-navigation/stack";
import { BottomTabParamList } from "../types";

export interface Configuration {
  id: number;
  title: string;
  subTitle: string;
  hasSwitcheIcon: boolean;
  isSwitched: boolean;
  iconName: string | undefined | null;
  action: string | undefined | null;
}

export interface ConfigurationItemProps {
  item: Configuration;
  index: number | 0;
}
