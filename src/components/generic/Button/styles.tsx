export default function getButtonStyles(viewType: string) {
  switch (viewType) {
    case 'default':
    default:
      return 'w-full p-[7px] rounded-[24px] border-2 border-blue text-blue font-semibold';
    case 'login':
      return 'w-full p-[7px] rounded-[24px] border-2 bg-blue border-blue text-white font-semibold';
  }
}
