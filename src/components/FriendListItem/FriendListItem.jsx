import clsx from "clsx";
import css from './FriendListItem.module.css';

const FirendListItem = ({avatar, name, isOnline}) => {
    return (
        <>
            <img src={avatar} alt="Avatar" width="48" className={css.friendItemAvatar} />
            <p className={css.friendItemName}>{name}</p>
            <p className={clsx(
                            css.friendItemStatus,
                            isOnline && css.online)}>
                                {isOnline ? "Online": "Offline"}
            </p>
        </>
    );
}

export default FirendListItem;