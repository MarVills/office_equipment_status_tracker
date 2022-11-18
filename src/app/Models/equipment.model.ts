export interface Equipment {
    id?: string;
    equipment: string;
    status: string;
    price: number;
    category: string;
    description: string;
  }

  export interface EquipmentDTO {
    id: string;
    equipment: string;
    status: string;
    price: number;
    category: string;
    description: string;
  }
  
  export const EQUIPMENT_DATA: Equipment[] = [
 
  ];