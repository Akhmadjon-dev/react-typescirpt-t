import Hoc from './Hoc'

interface UserMessage{
    name: string;
    message: string;
}

const example = (props: UserMessage): any => <p>
    {props.name},
    {props.message}
</p>

const Message = Hoc(example);

export default Message
