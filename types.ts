
export type SlideLayout = 
  | 'title' 
  | 'index' 
  | 'overview' 
  | 'section_header' 
  | 'phase_detail' 
  | 'simple_dark'
  | 'agreement'
  | 'thank_you';

export interface SlideData {
  id: number;
  layout: SlideLayout;
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  preparedFor?: string;
  preparedBy?: string;
  listItems?: string[];
  content?: string | string[];
  phase?: {
    number: string;
    title: string;
    duration: string;
    focus: string;
    deliverables: string[];
  };
  terms?: {
    title: string;
    value: string;
  }[];
  agreementDetails?: {
    text: string;
    preparedBy: string;
    acceptedBy: string;
    date: string;
  };
}
