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
  'bg-gradient-to-r from-cyan-500 to-blue-500',
].join(' ')

const SettingsContainerClass = [
  'relative',
  'ring-gray-900/5',
  'mx-auto',
  'w-5/6',
  'rounded-md',
  'p-4',
  'mb-20',
].join(' ')

export { overlayClass, SettingsContainerClass }
