import Provider from "./provider"
import { useDarkModeContext } from "./provider"

export default {
    /**
     * Provider Component
     *
     * This component wraps the application with a theme provider and a Dark Mode context.
     * It uses styled-components to apply theme styles and manages dark mode state using
     * the 'use-dark-mode' library. The context provides access to dark mode settings.
     *
     * @component
     *
     * @param {React.ReactNode} children - The content to be wrapped.
     *
     * @returns {JSX.Element} The root component providing theme and dark mode context.
     *
     * @example
     * // Usage example:
     * <Provider>
     *   ...
     * </Provider>
     */
    Provider,

    /**
     * useDarkModeContext Function
     *
     * This function is a hook that allows components to access the Dark Mode context.
     * It returns the dark mode context object, which includes state and functions
     * related to toggling dark mode.
     *
     * @function
     *
     * @returns {ReturnType<typeof useDarkMode>} Dark Mode context object.
     *
     * @example
     * // Usage example:
     * const darkMode = useDarkModeContext();
     * const isDarkMode = darkMode.value; // Get current dark mode state
     * darkMode.toggle(); // Toggle dark mode
     */
    useDarkModeContext
}