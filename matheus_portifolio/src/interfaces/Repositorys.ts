export interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
  private: boolean;
  owner: {
    login: string;
  };
}
