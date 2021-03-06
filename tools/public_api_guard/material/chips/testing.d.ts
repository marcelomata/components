export interface ChipHarnessFilters extends BaseHarnessFilters {
    selected?: boolean;
    text?: string | RegExp;
}

export interface ChipInputHarnessFilters extends BaseHarnessFilters {
    placeholder?: string | RegExp;
    value?: string | RegExp;
}

export interface ChipListHarnessFilters extends BaseHarnessFilters {
}

export interface ChipRemoveHarnessFilters extends BaseHarnessFilters {
}

export declare class MatChipHarness extends ComponentHarness {
    deselect(): Promise<void>;
    getRemoveButton(filter?: ChipRemoveHarnessFilters): Promise<MatChipRemoveHarness>;
    getText(): Promise<string>;
    isDisabled(): Promise<boolean>;
    isSelected(): Promise<boolean>;
    remove(): Promise<void>;
    select(): Promise<void>;
    toggle(): Promise<void>;
    static hostSelector: string;
    static with(options?: ChipHarnessFilters): HarnessPredicate<MatChipHarness>;
}

export declare class MatChipInputHarness extends ComponentHarness {
    blur(): Promise<void>;
    focus(): Promise<void>;
    getPlaceholder(): Promise<string>;
    getValue(): Promise<string>;
    isDisabled(): Promise<boolean>;
    isFocused(): Promise<boolean>;
    isRequired(): Promise<boolean>;
    sendSeparatorKey(key: TestKey | string): Promise<void>;
    setValue(newValue: string): Promise<void>;
    static hostSelector: string;
    static with(options?: ChipInputHarnessFilters): HarnessPredicate<MatChipInputHarness>;
}

export declare class MatChipListHarness extends ComponentHarness {
    getChips(filter?: ChipHarnessFilters): Promise<MatChipHarness[]>;
    getInput(filter?: ChipInputHarnessFilters): Promise<MatChipInputHarness>;
    getOrientation(): Promise<'horizontal' | 'vertical'>;
    isDisabled(): Promise<boolean>;
    isInvalid(): Promise<boolean>;
    isMultiple(): Promise<boolean>;
    isRequired(): Promise<boolean>;
    selectChips(filter?: ChipHarnessFilters): Promise<void>;
    static hostSelector: string;
    static with(options?: ChipListHarnessFilters): HarnessPredicate<MatChipListHarness>;
}

export declare class MatChipRemoveHarness extends ComponentHarness {
    click(): Promise<void>;
    static hostSelector: string;
    static with(options?: ChipRemoveHarnessFilters): HarnessPredicate<MatChipRemoveHarness>;
}
