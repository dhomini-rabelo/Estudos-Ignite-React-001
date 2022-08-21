import './styles.css'

export function Avatar({ src, hasBorder=true }: {src: string, hasBorder?: boolean }) {
    return (
        <img className={hasBorder ? 'avatarWithBorder' : 'simpleAvatar'} src={src} alt="user-photo" />
    )
}