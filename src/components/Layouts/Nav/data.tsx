import aiModelsIcon from '../../../assets/images/nav/ai-models.svg';
import chatIcon from '../../../assets/images/nav/chat.svg';
import galleryIcon from '../../../assets/images/nav/gallery.svg';
import aiCreateIcon from '../../../assets/images/nav/ai-create.svg';
import myGfIcon from '../../../assets/images/nav/my-gf.svg';
import starsAiIcon from '../../../assets/images/nav/stars-ai.svg';

export type NavItem = {
  icon: string;
  text: string;
  disabled: boolean;
  href: string;
  key: string;
};

const data: NavItem[] = [
  {
    icon: aiModelsIcon,
    text: 'Ai Models',
    disabled: false,
    href: '/',
    key: 'nav-ai-models',
  },
  {
    icon: chatIcon,
    text: 'Chats',
    disabled: false,
    href: '/conversations',
    key: 'nav-chat',
  },
  {
    icon: galleryIcon,
    text: 'Gallery',
    disabled: false,
    href: '/gallery',
    key: 'nav-gallery',
  },
  {
    icon: aiCreateIcon,
    text: 'Ai Create',
    disabled: true,
    href: '/create',
    key: 'nav-ai-create',
  },
  {
    icon: myGfIcon,
    text: 'My GF',
    disabled: true,
    href: '/my-gf',
    key: 'nav-my-gf',
  },
  {
    icon: starsAiIcon,
    text: 'Stars Ai',
    disabled: true,
    href: '/stars',
    key: 'nav-stars-ai',
  },
];

export default data;
