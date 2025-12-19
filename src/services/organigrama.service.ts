import { envs } from '@/config/envs';

export interface OrganigramaNodeData {
  image: string;
  name: string;
  title: string;
  text?: string;
}

export interface OrganigramaNode {
  key: string;
  expanded: boolean;
  type: string;
  data: OrganigramaNodeData;
  children: OrganigramaNode[];
}

export interface OrganigramaResponse {
  message: string;
  data: OrganigramaNode[];
}

export const getOrganigrama = async (): Promise<OrganigramaNode[]> => {
  try {
    const response = await fetch(`${envs.API_BASE_URL}/api/organigrama`);
    if (!response.ok) throw new Error('Error fetching organigrama');
    const result: OrganigramaResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
