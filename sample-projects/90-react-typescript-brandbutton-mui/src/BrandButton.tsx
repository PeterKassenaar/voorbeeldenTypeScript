import React from 'react';
import {Button, ButtonProps} from "@mui/material";
// 0. We use TypeScript, so we want to be Type Safe!
// If we want to type the attributes for our button,
// it is very common to use types like these:
type Props={
    // color: 'primary' | 'secondary' | 'success',
    children: React.ReactNode // text inside <BrandButton>...</BrandButton>
}

// 1. But, in this case (a MUI Button) we have a type ButtonProps. This
// is the one we're using. But for some reason we DON'T want
// the variant to change. This is a design decision.
// See for available attributes the Button API at https://mui.com/material-ui/api/button/.

// 2. So we define our own type, using the Omit<> utility function in this case
// See https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys for details.
// Now we *can not* use or change the 'variant' in our definition.
// type Props = Omit<ButtonProps, 'variant'>

// 3. Examples of other utility types in this case.
// If we ONLY want to be able to change the children AND variant, use Pick<>.
// type Props = Pick<ButtonProps, 'children'|'variant'>

// 4. If we want THESE properties to be required, use Required<>
// We are now composing a new type, based on a mapped type.
// type PropsRequired= Required<Props>

// 5. More information: https://youtu.be/eJ6R1knfsoc?t=2463

const BrandButton: React.FC<Props> = ({children}) => {
    return (
        <div>
            {/*Step 1: define your own props, for instance like so: */}
            <Button>{children}</Button>

            {/*Step 2: can be better, using ButtonProps (see above also):*/}
            {/*<Button {...rest}>{msg}</Button>*/}
        </div>
    );
};

export default BrandButton;
