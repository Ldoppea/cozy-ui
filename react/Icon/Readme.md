Provides an easy way to use SVG icons included in Cozy-UI as well
as your custom icons.

⚠️ When using `Icon`, you can either give a React component or use the identifier
of an already loaded one. `cozy-ui` ships with built-in icons that you can
include via `Sprite`. See the example below for how to include `Sprite`.
`Sprite` can for example be included in the main `Layout` of your application.

### Available illustrations

```
import Icon from 'cozy-ui/transpiled/react/Icon';
import Sprite from 'cozy-ui/transpiled/react/Icon/Sprite';
const availableIcons = ['cozy', 'cloud-broken', 'cozy-logo', 'device-laptop', 'device-phone', 'device-tablet', 'device-browser', 'file-type-audio', 'file-type-bin', 'file-type-code', 'file-type-files', 'file-type-folder', 'file-type-image', 'file-type-pdf', 'file-type-sheet', 'file-type-slide', 'file-type-text', 'file-type-video', 'file-type-zip', 'google', 'logout-large', 'top-select', 'bottom-select', 'check-white', 'dash-white', 'keychain'];

<div style={{ fontSize: '2rem', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
  <Sprite />
  {
  availableIcons.map(icon => <div key={icon} style={{ textAlign: 'center'}}>
      <Icon icon={ icon }/>
      <p style={{ fontSize: '1rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{ icon }</p>
    </div>
  )}
</div>
```

### Available UI icons

```
import Icon from 'cozy-ui/transpiled/react/Icon';
import Sprite from 'cozy-ui/transpiled/react/Icon/Sprite';
const colors = ['#297EF2', '#08b442', '#B449E7', '#F52D2D', '#FF962F']
let i = 0
const availableIcons = ['album-add','album-remove','album','answer','apple','archive','attachment','attention','bank','banking-add','banking','bell','bottom','browser-brave','browser-chrome','browser-duckduckgo','browser-edge','browser-firefox','browser-ie','browser-opera','browser-safari','burger','calendar','camera','car','categories','certified','check-circle','check-list','check-square','check','circle-filled','clock','cloud-happy','cloud','collect','comment','company','compass','connector','contract','contrast','cozy-laugh','cozy-text','credit-card-add','credit-card','credit','crop','cross-circle','cross-medium','cross-small','cross','cube','dash','dashboard','data-control','debit','devices','dots','down','download','drawing-arrow-up','dropdown-close','dropdown-open','dropdown','dropup','email-notification','email','eu','euro','exchange','eye-closed','eye','file-add','file-duotone','file-new','file-none','file-outline','file','filter','fingerprint','flag-outlined','flag','flash-auto','flashlight','folder-add','folder','forbidden','from-user','gear','globe','graph-circle','grid','group-list','groups','heart','help','history','home','hourglass','image','info-outlined','info','key','laptop','left','lightbulb','link-out','link','list','location','lock','logout','magic-trick','magnet','magnifier','merge','movement-in','movement-out','moveto','multi-files','music','new','next','note','notification-email','offline','online','openwith','palette','paperplane','password','pen','people','percent-circle','percent','personal-data','phone-download','phone','pie-chart','pin','plus-small','plus','previous','printer','qualify','rename','repare','restore','right','rise','rotate-left','rotate-right','sad-cozy','select-all','setting','share-circle','share','sound','spinner','stack','star','stats','sync-cozy','sync','target','team','telephone','to-the-cloud','top','trash','trophy','unlink','unlock','up','upload','videos','wallet-add','wallet-new','wallet','warn','warning-circle','warning','wrench-circle'];
<div style={{ fontSize: '2rem', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
  <Sprite />
  {
  availableIcons.map(icon => <div key={icon} style={{ textAlign: 'center'}}>
      <Icon icon={ icon } color={ colors[i++ % colors.length] }/>
      <p style={{ fontSize: '1rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{ icon }</p>
    </div>
  )}
</div>
```

### Transform properties

Use `spin` and `rotate` if you want you to turn your icons upside down 🙃.

```
import Icon from 'cozy-ui/transpiled/react/Icon';
<div>
  <Icon icon='spinner' color='#0bda51' spin/>{'\u00A0'}
  <Icon icon='right' color='#c30017' rotate={45}/>
</div>
```

### Custom icons

The `icon` attribute can take a arbitrary React component. It is expected that
this component print an `<svg>` tag and forwards any props to it.

```jsx static
const MyIcon = (props) => <svg {...props}>…</svg>;
<Icon icon={myIcon} width={32} height={32} color="purple" />
```

You can also directly import an SVG to use it. You MUST use svg-sprite-loader
to load your SVG (either explicitly or, better, implicitly in your `webpack.config.js`).

⚠️ Do not put a `fill` property on your icon

```jsx static
import myIcon from 'my-icon.svg'

;<Icon icon={myIcon} width={32} height={32} color="purple" />
```

### Props forwarding

Icon forwards unknown props to the underlying `<svg />` element.

```
import Icon from 'cozy-ui/transpiled/react/Icon';
<div>
  <Icon icon='warning' onClick={() => alert('Be careful !')} width={32} height={32} color='purple' /><span>← Click it</span>
</div>
```

### Import React icons directly

If you do not want to include the full icon sprite in your
bundle, you can import a React version of the svg icon (svg icons are converted
to React components with svgr).  This is useful since with tree shaking, you'll
pay only for the icons that you use.

```jsx static
import Album from 'cozy-ui/transpiled/react/Icons/Album'
<Icon icon={Album} />
```

```
import Icon from 'cozy-ui/transpiled/react/Icon';

import Album from 'cozy-ui/transpiled/react/Icons/Album'
import AlbumAdd from 'cozy-ui/transpiled/react/Icons/AlbumAdd'
import AlbumRemove from 'cozy-ui/transpiled/react/Icons/AlbumRemove'
import Answer from 'cozy-ui/transpiled/react/Icons/Answer'
import Apple from 'cozy-ui/transpiled/react/Icons/Apple'
import Archive from 'cozy-ui/transpiled/react/Icons/Archive'
import Attachment from 'cozy-ui/transpiled/react/Icons/Attachment'
import Attention from 'cozy-ui/transpiled/react/Icons/Attention'
import Bank from 'cozy-ui/transpiled/react/Icons/Bank'
import Banking from 'cozy-ui/transpiled/react/Icons/Banking'
import BankingAdd from 'cozy-ui/transpiled/react/Icons/BankingAdd'
import Bell from 'cozy-ui/transpiled/react/Icons/Bell'
import Bottom from 'cozy-ui/transpiled/react/Icons/Bottom'
import BrowserBrave from 'cozy-ui/transpiled/react/Icons/BrowserBrave'
import BrowserChrome from 'cozy-ui/transpiled/react/Icons/BrowserChrome'
import BrowserDuckduckgo from 'cozy-ui/transpiled/react/Icons/BrowserDuckduckgo'
import BrowserEdge from 'cozy-ui/transpiled/react/Icons/BrowserEdge'
import BrowserFirefox from 'cozy-ui/transpiled/react/Icons/BrowserFirefox'
import BrowserIe from 'cozy-ui/transpiled/react/Icons/BrowserIe'
import BrowserOpera from 'cozy-ui/transpiled/react/Icons/BrowserOpera'
import BrowserSafari from 'cozy-ui/transpiled/react/Icons/BrowserSafari'
import Burger from 'cozy-ui/transpiled/react/Icons/Burger'
import Calendar from 'cozy-ui/transpiled/react/Icons/Calendar'
import Camera from 'cozy-ui/transpiled/react/Icons/Camera'
import Car from 'cozy-ui/transpiled/react/Icons/Car'
import Categories from 'cozy-ui/transpiled/react/Icons/Categories'
import Certified from 'cozy-ui/transpiled/react/Icons/Certified'
import Check from 'cozy-ui/transpiled/react/Icons/Check'
import CheckCircle from 'cozy-ui/transpiled/react/Icons/CheckCircle'
import CheckList from 'cozy-ui/transpiled/react/Icons/CheckList'
import CheckSquare from 'cozy-ui/transpiled/react/Icons/CheckSquare'
import CircleFilled from 'cozy-ui/transpiled/react/Icons/CircleFilled'
import Clock from 'cozy-ui/transpiled/react/Icons/Clock'
import Cloud from 'cozy-ui/transpiled/react/Icons/Cloud'
import CloudHappy from 'cozy-ui/transpiled/react/Icons/CloudHappy'
import Collect from 'cozy-ui/transpiled/react/Icons/Collect'
import Comment from 'cozy-ui/transpiled/react/Icons/Comment'
import Company from 'cozy-ui/transpiled/react/Icons/Company'
import Compass from 'cozy-ui/transpiled/react/Icons/Compass'
import Connector from 'cozy-ui/transpiled/react/Icons/Connector'
import Contract from 'cozy-ui/transpiled/react/Icons/Contract'
import Contrast from 'cozy-ui/transpiled/react/Icons/Contrast'
import CozyLaugh from 'cozy-ui/transpiled/react/Icons/CozyLaugh'
import CozyText from 'cozy-ui/transpiled/react/Icons/CozyText'
import Credit from 'cozy-ui/transpiled/react/Icons/Credit'
import CreditCard from 'cozy-ui/transpiled/react/Icons/CreditCard'
import CreditCardAdd from 'cozy-ui/transpiled/react/Icons/CreditCardAdd'
import Crop from 'cozy-ui/transpiled/react/Icons/Crop'
import Cross from 'cozy-ui/transpiled/react/Icons/Cross'
import CrossCircle from 'cozy-ui/transpiled/react/Icons/CrossCircle'
import CrossMedium from 'cozy-ui/transpiled/react/Icons/CrossMedium'
import CrossSmall from 'cozy-ui/transpiled/react/Icons/CrossSmall'
import Cube from 'cozy-ui/transpiled/react/Icons/Cube'
import Dash from 'cozy-ui/transpiled/react/Icons/Dash'
import Dashboard from 'cozy-ui/transpiled/react/Icons/Dashboard'
import DataControl from 'cozy-ui/transpiled/react/Icons/DataControl'
import Debit from 'cozy-ui/transpiled/react/Icons/Debit'
import Devices from 'cozy-ui/transpiled/react/Icons/Devices'
import Dots from 'cozy-ui/transpiled/react/Icons/Dots'
import Down from 'cozy-ui/transpiled/react/Icons/Down'
import Download from 'cozy-ui/transpiled/react/Icons/Download'
import DrawingArrowUp from 'cozy-ui/transpiled/react/Icons/DrawingArrowUp'
import Dropdown from 'cozy-ui/transpiled/react/Icons/Dropdown'
import DropdownClose from 'cozy-ui/transpiled/react/Icons/DropdownClose'
import DropdownOpen from 'cozy-ui/transpiled/react/Icons/DropdownOpen'
import Dropup from 'cozy-ui/transpiled/react/Icons/Dropup'
import Email from 'cozy-ui/transpiled/react/Icons/Email'
import EmailNotification from 'cozy-ui/transpiled/react/Icons/EmailNotification'
import Eu from 'cozy-ui/transpiled/react/Icons/Eu'
import Euro from 'cozy-ui/transpiled/react/Icons/Euro'
import Exchange from 'cozy-ui/transpiled/react/Icons/Exchange'
import Eye from 'cozy-ui/transpiled/react/Icons/Eye'
import EyeClosed from 'cozy-ui/transpiled/react/Icons/EyeClosed'
import File from 'cozy-ui/transpiled/react/Icons/File'
import FileAdd from 'cozy-ui/transpiled/react/Icons/FileAdd'
import FileDuotone from 'cozy-ui/transpiled/react/Icons/FileDuotone'
import FileNew from 'cozy-ui/transpiled/react/Icons/FileNew'
import FileNone from 'cozy-ui/transpiled/react/Icons/FileNone'
import FileOutline from 'cozy-ui/transpiled/react/Icons/FileOutline'
import Filter from 'cozy-ui/transpiled/react/Icons/Filter'
import Fingerprint from 'cozy-ui/transpiled/react/Icons/Fingerprint'
import Flag from 'cozy-ui/transpiled/react/Icons/Flag'
import FlagOutlined from 'cozy-ui/transpiled/react/Icons/FlagOutlined'
import FlashAuto from 'cozy-ui/transpiled/react/Icons/FlashAuto'
import Flashlight from 'cozy-ui/transpiled/react/Icons/Flashlight'
import Folder from 'cozy-ui/transpiled/react/Icons/Folder'
import FolderAdd from 'cozy-ui/transpiled/react/Icons/FolderAdd'
import Forbidden from 'cozy-ui/transpiled/react/Icons/Forbidden'
import FromUser from 'cozy-ui/transpiled/react/Icons/FromUser'
import Gear from 'cozy-ui/transpiled/react/Icons/Gear'
import Globe from 'cozy-ui/transpiled/react/Icons/Globe'
import GraphCircle from 'cozy-ui/transpiled/react/Icons/GraphCircle'
import Grid from 'cozy-ui/transpiled/react/Icons/Grid'
import GroupList from 'cozy-ui/transpiled/react/Icons/GroupList'
import Groups from 'cozy-ui/transpiled/react/Icons/Groups'
import Heart from 'cozy-ui/transpiled/react/Icons/Heart'
import Help from 'cozy-ui/transpiled/react/Icons/Help'
import History from 'cozy-ui/transpiled/react/Icons/History'
import Home from 'cozy-ui/transpiled/react/Icons/Home'
import Hourglass from 'cozy-ui/transpiled/react/Icons/Hourglass'
import Image from 'cozy-ui/transpiled/react/Icons/Image'
import Info from 'cozy-ui/transpiled/react/Icons/Info'
import InfoOutlined from 'cozy-ui/transpiled/react/Icons/InfoOutlined'
import Key from 'cozy-ui/transpiled/react/Icons/Key'
import Laptop from 'cozy-ui/transpiled/react/Icons/Laptop'
import Left from 'cozy-ui/transpiled/react/Icons/Left'
import Lightbulb from 'cozy-ui/transpiled/react/Icons/Lightbulb'
import Link from 'cozy-ui/transpiled/react/Icons/Link'
import LinkOut from 'cozy-ui/transpiled/react/Icons/LinkOut'
import List from 'cozy-ui/transpiled/react/Icons/List'
import Location from 'cozy-ui/transpiled/react/Icons/Location'
import Lock from 'cozy-ui/transpiled/react/Icons/Lock'
import Logout from 'cozy-ui/transpiled/react/Icons/Logout'
import MagicTrick from 'cozy-ui/transpiled/react/Icons/MagicTrick'
import Magnet from 'cozy-ui/transpiled/react/Icons/Magnet'
import Magnifier from 'cozy-ui/transpiled/react/Icons/Magnifier'
import Merge from 'cozy-ui/transpiled/react/Icons/Merge'
import MovementIn from 'cozy-ui/transpiled/react/Icons/MovementIn'
import MovementOut from 'cozy-ui/transpiled/react/Icons/MovementOut'
import Moveto from 'cozy-ui/transpiled/react/Icons/Moveto'
import MultiFiles from 'cozy-ui/transpiled/react/Icons/MultiFiles'
import Music from 'cozy-ui/transpiled/react/Icons/Music'
import New from 'cozy-ui/transpiled/react/Icons/New'
import Next from 'cozy-ui/transpiled/react/Icons/Next'
import Note from 'cozy-ui/transpiled/react/Icons/Note'
import NotificationEmail from 'cozy-ui/transpiled/react/Icons/NotificationEmail'
import Offline from 'cozy-ui/transpiled/react/Icons/Offline'
import Online from 'cozy-ui/transpiled/react/Icons/Online'
import Openwith from 'cozy-ui/transpiled/react/Icons/Openwith'
import Palette from 'cozy-ui/transpiled/react/Icons/Palette'
import Paperplane from 'cozy-ui/transpiled/react/Icons/Paperplane'
import Password from 'cozy-ui/transpiled/react/Icons/Password'
import Pen from 'cozy-ui/transpiled/react/Icons/Pen'
import People from 'cozy-ui/transpiled/react/Icons/People'
import Percent from 'cozy-ui/transpiled/react/Icons/Percent'
import PercentCircle from 'cozy-ui/transpiled/react/Icons/PercentCircle'
import PersonalData from 'cozy-ui/transpiled/react/Icons/PersonalData'
import Phone from 'cozy-ui/transpiled/react/Icons/Phone'
import PhoneDownload from 'cozy-ui/transpiled/react/Icons/PhoneDownload'
import PieChart from 'cozy-ui/transpiled/react/Icons/PieChart'
import Pin from 'cozy-ui/transpiled/react/Icons/Pin'
import Plus from 'cozy-ui/transpiled/react/Icons/Plus'
import PlusSmall from 'cozy-ui/transpiled/react/Icons/PlusSmall'
import Previous from 'cozy-ui/transpiled/react/Icons/Previous'
import Printer from 'cozy-ui/transpiled/react/Icons/Printer'
import Qualify from 'cozy-ui/transpiled/react/Icons/Qualify'
import Rename from 'cozy-ui/transpiled/react/Icons/Rename'
import Repare from 'cozy-ui/transpiled/react/Icons/Repare'
import Restore from 'cozy-ui/transpiled/react/Icons/Restore'
import Right from 'cozy-ui/transpiled/react/Icons/Right'
import Rise from 'cozy-ui/transpiled/react/Icons/Rise'
import RotateLeft from 'cozy-ui/transpiled/react/Icons/RotateLeft'
import RotateRight from 'cozy-ui/transpiled/react/Icons/RotateRight'
import SadCozy from 'cozy-ui/transpiled/react/Icons/SadCozy'
import SelectAll from 'cozy-ui/transpiled/react/Icons/SelectAll'
import Setting from 'cozy-ui/transpiled/react/Icons/Setting'
import Share from 'cozy-ui/transpiled/react/Icons/Share'
import ShareCircle from 'cozy-ui/transpiled/react/Icons/ShareCircle'
import Sound from 'cozy-ui/transpiled/react/Icons/Sound'
import Spinner from 'cozy-ui/transpiled/react/Icons/Spinner'
import Stack from 'cozy-ui/transpiled/react/Icons/Stack'
import Star from 'cozy-ui/transpiled/react/Icons/Star'
import Stats from 'cozy-ui/transpiled/react/Icons/Stats'
import Sync from 'cozy-ui/transpiled/react/Icons/Sync'
import SyncCozy from 'cozy-ui/transpiled/react/Icons/SyncCozy'
import Target from 'cozy-ui/transpiled/react/Icons/Target'
import Team from 'cozy-ui/transpiled/react/Icons/Team'
import Telephone from 'cozy-ui/transpiled/react/Icons/Telephone'
import ToTheCloud from 'cozy-ui/transpiled/react/Icons/ToTheCloud'
import Top from 'cozy-ui/transpiled/react/Icons/Top'
import Trash from 'cozy-ui/transpiled/react/Icons/Trash'
import Trophy from 'cozy-ui/transpiled/react/Icons/Trophy'
import Unlink from 'cozy-ui/transpiled/react/Icons/Unlink'
import Unlock from 'cozy-ui/transpiled/react/Icons/Unlock'
import Up from 'cozy-ui/transpiled/react/Icons/Up'
import Upload from 'cozy-ui/transpiled/react/Icons/Upload'
import Videos from 'cozy-ui/transpiled/react/Icons/Videos'
import Wallet from 'cozy-ui/transpiled/react/Icons/Wallet'
import WalletAdd from 'cozy-ui/transpiled/react/Icons/WalletAdd'
import WalletNew from 'cozy-ui/transpiled/react/Icons/WalletNew'
import Warn from 'cozy-ui/transpiled/react/Icons/Warn'
import Warning from 'cozy-ui/transpiled/react/Icons/Warning'
import WarningCircle from 'cozy-ui/transpiled/react/Icons/WarningCircle'
import WrenchCircle from 'cozy-ui/transpiled/react/Icons/WrenchCircle';

const icons = [
  Album,
  AlbumAdd,
  AlbumRemove,
  Answer,
  Apple,
  Archive,
  Attachment,
  Attention,
  Bank,
  Banking,
  BankingAdd,
  Bell,
  Bottom,
  BrowserBrave,
  BrowserChrome,
  BrowserDuckduckgo,
  BrowserEdge,
  BrowserFirefox,
  BrowserIe,
  BrowserOpera,
  BrowserSafari,
  Burger,
  Calendar,
  Camera,
  Car,
  Categories,
  Certified,
  Check,
  CheckCircle,
  CheckList,
  CheckSquare,
  CircleFilled,
  Clock,
  Cloud,
  CloudHappy,
  Collect,
  Comment,
  Company,
  Compass,
  Connector,
  Contract,
  Contrast,
  CozyLaugh,
  CozyText,
  Credit,
  CreditCard,
  CreditCardAdd,
  Crop,
  Cross,
  CrossCircle,
  CrossSmall,
  Cube,
  Dash,
  Dashboard,
  DataControl,
  Debit,
  Devices,
  Dots,
  Down,
  Download,
  DrawingArrowUp,
  Dropdown,
  DropdownClose,
  DropdownOpen,
  Dropup,
  Email,
  EmailNotification,
  Eu,
  Euro,
  Exchange,
  Eye,
  EyeClosed,
  File,
  FileAdd,
  FileDuotone,
  FileNew,
  FileNone,
  FileOutline,
  Filter,
  Fingerprint,
  Flag,
  FlagOutlined,
  FlashAuto,
  Flashlight,
  Folder,
  FolderAdd,
  Forbidden,
  FromUser,
  Gear,
  Globe,
  GraphCircle,
  Grid,
  GroupList,
  Groups,
  Heart,
  Help,
  History,
  Home,
  Hourglass,
  Image,
  Info,
  InfoOutlined,
  Key,
  Laptop,
  Left,
  Lightbulb,
  Link,
  LinkOut,
  List,
  Location,
  Lock,
  Logout,
  MagicTrick,
  Magnet,
  Magnifier,
  Merge,
  MovementIn,
  MovementOut,
  Moveto,
  MultiFiles,
  Music,
  New,
  Next,
  Note,
  NotificationEmail,
  Offline,
  Online,
  Openwith,
  Palette,
  Paperplane,
  Password,
  Pen,
  People,
  Percent,
  PercentCircle,
  PersonalData,
  Phone,
  PhoneDownload,
  PieChart,
  Pin,
  Plus,
  PlusSmall,
  Previous,
  Printer,
  Qualify,
  Rename,
  Repare,
  Restore,
  Right,
  Rise,
  RotateLeft,
  RotateRight,
  SadCozy,
  SelectAll,
  Setting,
  Share,
  ShareCircle,
  Sound,
  Spinner,
  Stack,
  Star,
  Stats,
  Sync,
  SyncCozy,
  Target,
  Team,
  Telephone,
  ToTheCloud,
  Top,
  Trash,
  Trophy,
  Unlink,
  Unlock,
  Up,
  Upload,
  Videos,
  Wallet,
  WalletAdd,
  WalletNew,
  Warn,
  Warning,
  WarningCircle,
  WrenchCircle
];

const wrapperStyle = {
  fontSize: '2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  color: '#444'
};

initialState = { size: 16 };

const handleInputRangeChange = ev => {
  setState({ size: parseInt(ev.target.value, 10) })
};

<div>
  <p>
    Font size: <input type='range' min='8' max='48' value={state.size} onChange={handleInputRangeChange} /> {state.size}px
  </p>
  <div style={wrapperStyle}>
    {
    icons.map(icon => <div key={icon} style={{ textAlign: 'center'}}>
        <Icon icon={ icon } size={state.size} />
        <p style={{ fontSize: '1rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{ icon.name.replace(/^Svg/, '') }</p>
      </div>
    )}
  </div>
</div>
```
