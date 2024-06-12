import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface DisclosureProps {
  isOpen: boolean;
  toggle: () => void;
}

type MyPersist = (
  config: StateCreator<DisclosureProps>,
  options: PersistOptions<DisclosureProps>
) => StateCreator<DisclosureProps>;

export const useDisclosure = create<DisclosureProps, []>(
  (persist as MyPersist)(
    (set) => ({
      isOpen: true,
      toggle: () =>
        set((state) => ({
          isOpen: !state.isOpen,
        })),
    }),
    {
      name: "aside",
    }
  )
);
