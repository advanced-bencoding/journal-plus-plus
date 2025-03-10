import { AlertDialog, Button, XStack, YStack } from 'tamagui';

interface AlertPopupProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const AlertPopup: React.FC<AlertPopupProps> = ({ isOpen, onConfirm, onCancel }) => {
  return (
    <AlertDialog native open={isOpen}>
              <AlertDialog.Trigger asChild>
        <Button style={{ display: "none" }}>Show Alert</Button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack gap="$4">
            <AlertDialog.Title>Delete Entry</AlertDialog.Title>
            <AlertDialog.Description>
              Delete this entry?
            </AlertDialog.Description>

            <XStack gap="$3">
              <AlertDialog.Cancel onPress={onCancel} asChild>
                <Button>Cancel</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action onPress={onConfirm} asChild>
                <Button theme="accent">Delete</Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  )
}

export default AlertPopup;