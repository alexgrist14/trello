export interface Log {
  id: number;
  entity: string;
  entityId: number;
  boardId: number;
  title: string;
  action: "create" | "update" | "delete";
  createdAt: string;
}
