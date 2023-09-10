import ModalImageBox from './ModalImageBox';
import avatars from '../../data/data';
const ModalAvatar = () => {
  return (
    <div className="flex-align-justify-center modal-avatar-style">
      <div className="grid-images">
        {avatars.map((avatar) => {
          return <ModalImageBox key={avatar.id} {...avatar} />;
        })}
      </div>
    </div>
  );
};
export default ModalAvatar;
