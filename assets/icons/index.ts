import AddCircleIcon from "./pack/AddCircleIcon";
import AddSquareIcon from "./pack/AddSquareIcon";
import AgendaIcon from "./pack/AgendaIcon";
import CalendarIcon from "./pack/CalendarIcon";
import ChevronDownIcon from "./pack/ChevronDownIcon";
import CloseIcon from "./pack/CloseIcon";
import DashboardIcon from "./pack/DashboardIcon";
import Document2Icon from "./pack/Document2Icon";
import DocumentIcon from "./pack/DocumentIcon";
import DropdownIcon from "./pack/DropdownIcon";
import EditIcon from "./pack/EditIcon";
import HomeIcon from "./pack/HomeIcon";
import InstantUploadIcon from "./pack/InstantUploadIcon";
import LeftArrowCircleIcon from "./pack/LeftArrowCircleIcon";
import LogoutIcon from "./pack/LogoutIcon";
import MenuBoardIcon from "./pack/MenuBoardIcon";
import MinusIcon from "./pack/MinusIcon";
import NewsPaperIcon from "./pack/NewsPaperIcon";
import Notification2Icon from "./pack/Notification2Icon";
import NotificationIcon from "./pack/NotificationIcon";
import PatientsIcon from "./pack/PatientsIcon";
import PhoneIcon from "./pack/PhoneIcon";
import SearchIcon from "./pack/SearchIcon";
import TaskIcon from "./pack/TaskIcon";
import TodoIcon from "./pack/TodoIcon";
import ToggleMenuIcon from "./pack/ToggleMenuIcon";
import UploadIcon from "./pack/UploadIcon";

const iconPack = {
  "add-square": AddSquareIcon,
  agenda: AgendaIcon,
  document: DocumentIcon,
  edit: EditIcon,
  home: HomeIcon,
  logout: LogoutIcon,
  "menu-board": MenuBoardIcon,
  newspaper: NewsPaperIcon,
  notification: NotificationIcon,
  patients: PatientsIcon,
  phone: PhoneIcon,
  todo: TodoIcon,
  "toggle-menu": ToggleMenuIcon,
  search: SearchIcon,
  "notification-2": Notification2Icon,
  dropdown: DropdownIcon,
  "document-2": Document2Icon,
  dashboard: DashboardIcon,
  tasks: TaskIcon,
  "instant-upload": InstantUploadIcon,
  "add-circle": AddCircleIcon,
  "left-arrow-circle": LeftArrowCircleIcon,
  "chevron-down": ChevronDownIcon,
  minus: MinusIcon,
  calendar: CalendarIcon,
  upload: UploadIcon,
  close: CloseIcon,
};

export { iconPack };

export type TIconPack = keyof typeof iconPack;

export const iconNames = Object.keys(iconPack) as TIconPack[];
