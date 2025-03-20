import css from './Profile.module.css';

const Profile = ({name, tag, location, image, stats}) => {
    return <div className={css.profileCard}>
            <div className={css.profileCardInfo}>
                <img
                    src={image}
                    alt="User avatar"
                    className={css.profileCardInfoAvatar}
                />
                <p className={css.profileCardMainText}>{name}</p>
                <p className={css.profileCardText}>@{tag}</p>
                <p className={css.profileCardText}>{location}</p>
            </div>
            <ul className={css.profileCardStatsList}>
                <li className={css.profileCardStatsItem}>
                    <span className={css.statsName}>Followers</span>
                    <span className={css.statsValue}>{stats.followers}</span>
                </li>
                <li className={css.profileCardStatsItem}>
                    <span className={css.statsName}>Views</span>
                    <span className={css.statsValue}>{stats.views}</span>
                </li>
                <li className={css.profileCardStatsItem}>
                    <span className={css.statsName}>Likes</span>
                    <span className={css.statsValue}>{stats.likes}</span>
                </li>
            </ul>
</div>
}

export default Profile;