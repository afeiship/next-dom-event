interface NxStatic {
  DomEvent: {
    on: (el: HTMLElement, eventName: string, listener: (event: Event) => void, options?: any) => {
      destroy: () => void;
    }
  }
}
