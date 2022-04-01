// https://dev.to/wheelmaker24/a-simple-strategy-for-structuring-tailwindcss-classnames-1ba9
  const overlayClass = [
    'fixed',
    'top-0',
    'left-0',
    'right-0',
    'h-screen',
    'w-screen',
    'flex',
    'flex-col',
    'justify-center',
  ].join(' ')

  const SettingsContainerClass = [
    'relative',
    'ring-gray-900/5',
    'mx-auto',
    'w-3/6',
    'h-4/6',
    'rounded-md',
    'px-4',
    'py-2',
    'pb-12',
  ].join(' ')

  export {overlayClass, SettingsContainerClass}