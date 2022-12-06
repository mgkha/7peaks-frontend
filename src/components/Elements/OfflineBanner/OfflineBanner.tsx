import { VscDebugDisconnect } from "react-icons/vsc";

type OfflineBannerProps = {
  isOffline: boolean;
};

export const OfflineBanner = ({ isOffline }: OfflineBannerProps) => {
  return (
    <>
      {isOffline && (
        <div className="offline-banner">
          <span>You are offline</span>
          <VscDebugDisconnect />
        </div>
      )}
    </>
  );
};
