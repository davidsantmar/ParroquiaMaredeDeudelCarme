import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChurch } from '@fortawesome/free-solid-svg-icons';
import { faBookBible } from '@fortawesome/free-solid-svg-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons';

// Agrega el ícono praying-hands a la librería
library.add(faPrayingHands);

export const HomeIcon = (props) => (
    <FontAwesomeIcon icon={faChurch} size={28} color="white" {...props} />
)

export const HistoryIcon = (props) => (
    <FontAwesome name="info-circle" size={28} color="white" {...props} />
)

export const NewsIcon = (props) => (
    <Ionicons name="newspaper-outline" size={28} color="white" {...props} />
)

export const ContactIcon = (props) => (
    <MaterialIcons name="contact-support" size={28} color="white" {...props} />
)

export const MassIcon = (props) => (
    <FontAwesomeIcon icon={faBookBible} size={48} color="white" {...props} />
)

export const TouchIcon = (props) => (
    <MaterialIcons name="touch-app" size={48} color="orange" {...props} />
)

export const PrayIcon = (props) => (
    <FontAwesomeIcon icon={faPrayingHands} size={56} color="white" {...props} />
)