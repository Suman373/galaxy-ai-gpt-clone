import { ChatStatus, UIMessage } from "ai";
import {Document} from 'mongoose';

export type ChatInputProps = {
  onSend: (text: string) => void;
  status: ChatStatus;
}

export type SidebarProps = {
  onNewChat: () => void;
  activeChatId?: string;
};

export type MainChatProps = {
  chatId?: string;
  initialMessages?: UIMessage[]
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


export interface IChat extends Document {
  userId: string;
  id: string;
  messages: UIMessage[]
}
