import SimpleIcons from 'simple-icons';

export default function GetIcon(slug) {
    const icon = SimpleIcons.Get(slug).svg
    return icon;
}

