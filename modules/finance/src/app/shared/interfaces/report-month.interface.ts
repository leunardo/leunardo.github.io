export interface ReportMonth {
  revenue: number;
  bills: {
      description: string;
      value: number;
      icon: string;
      until?: any;
  }[];
}
