export interface IItem {
  id: string;
  name: string;
  sellIn: number;
  quality: number;
  quantity: number;
  isDeleted: boolean;
  createdOn: string;
  lastModifiedOn: string | null;
  createdBy: string;
  lastModifiedBy: string | null;
}