type OnReturnValue = {
  destroy: () => void;
}

interface NxStatic {
  DomEvent: {
    on(el: HTMLElement, type: string, listener: (event: Event) => void, useCapture?: boolean): OnReturnValue
    on(el: HTMLElement, type: string, listener: (event: Event) => void, options?: any): OnReturnValue
  }
}
