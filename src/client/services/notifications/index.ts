import { Position, Toaster, IToastProps } from '@blueprintjs/core';


const defaultConfig: Partial<IToastProps> = {
  timeout: 3000,
};

const toaster = Toaster.create({
  position: Position.TOP,
  maxToasts: 5,
});

/**
 * Show 'toast' notification. Notifications may be stacked.
 */
export const showNotification = (notification: IToastProps): void => {
  toaster.show({ ...defaultConfig, ...notification });
};
