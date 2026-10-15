export type ToastKind = "success" | "error";
export interface ToastItem {
  id: number;
  kind: ToastKind;
  title: string;
  description?: string;
}

const listeners = new Set<(t: ToastItem) => void>();
let counter = 0;

const emit = (kind: ToastKind, title: string, description?: string) =>
  listeners.forEach((l) => l({ id: ++counter, kind, title, description }));

export const toast = {
  success: (title: string, description?: string) => emit("success", title, description),
  error: (title: string, description?: string) => emit("error", title, description),
};

export const subscribe = (listener: (t: ToastItem) => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};
