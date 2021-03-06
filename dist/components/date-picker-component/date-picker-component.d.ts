import { OnInit, EventEmitter } from '@angular/core';
import { Day } from 'dayspan';
export declare class DatePickerComponent implements OnInit {
    monthLabels: string[];
    dayLabels: string[];
    date: Date;
    fromDate: Date;
    toDate: Date;
    validDates: Date[];
    dateStyles: any;
    backgroundStyle: {
        'background-color': string;
    };
    notInCalendarStyle: {
        'color': string;
    };
    dayLabelsStyle: {
        'font-weight': number;
        'font-size': string;
    };
    monthLabelsStyle: {
        'font-size': string;
    };
    yearLabelsStyle: {
        'font-size': string;
    };
    itemSelectedStyle: {
        'background': string;
        'color': string;
    };
    invalidDateStyle: {
        'text-decoration': string;
        'color': string;
    };
    todaysItemStyle: {
        'color': string;
    };
    onSelect: EventEmitter<Date>;
    showView: string;
    weeks: Array<Array<Day>>;
    years: Array<number>;
    yearSelected: number;
    monthSelected: number;
    currentYear: number;
    currentMonth: number;
    currentDay: number;
    daySelected: Day;
    dayHighlighted: Day;
    startYear: number;
    endYear: number;
    ngOnInit(): void;
    initOptions(): void;
    createCalendarWeeks(): void;
    hasPrevious(): boolean;
    hasNext(): boolean;
    previous(): void;
    next(): void;
    confirmDay(day: Day): void;
    selectDay(day: Day): void;
    showMonthView(): void;
    hasYearSelection(): boolean;
    showYearView(): void;
    generateYears(): void;
    showPreviousYears(): void;
    showNextYears(): void;
    hasPreviousYears(): boolean;
    hasNextYears(): boolean;
    selectMonth(month: number): void;
    selectYear(year: any): void;
    resetView(): void;
    isToday(day: any): boolean;
    generateCalendarWeeks(forDay: Day): Array<any>;
    isValidDay(day: Day): boolean;
    isOneOfTheValidDates(day: Day): boolean;
    isValidMonth(index: number): boolean;
    getDayStyle(day: Day): {};
    getMonthStyle(index: any): {};
    getYearStyle(year: any): {};
}
