import { ChatStatus, UIMessage } from "ai";

export type ChatInputProps = {
  onSend: (msg: any) => void;
  status: ChatStatus;
}

export type SidebarProps = {
  onNewChat: () => void;
};

export type MainChatProps = {
  chatId?: string;
}

export type SidebarItemProps = {
  onClick?: () => void;
  href?: string;
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
};


export type MessageListProps = {
  messages: UIMessage[];
};