import { fs, path } from '@vuepress/utils';
import type { SidebarConfig, SidebarItem } from '@vuepress/theme-default';

// 定义 SidebarItemExtended 接口来包含 SidebarItem 类型和 children 属性
interface SidebarItemExtended extends SidebarItem {
    collapsible?: boolean;
    children?: SidebarItemExtended[];
}

function fileDisplay( filePath: string ): SidebarItemExtended[] {
    let __sidebar: SidebarItemExtended[] = [];
    // 根据文件路径读取文件，返回一个文件列表
    const files_year = fs.readdirSync( filePath );
    // 遍历读取到的文件列表
    for ( let filename_year of files_year ) {
        // path.join得到当前文件的绝对路径
        const filepath_year = path.join( filePath, filename_year );
        const dict: SidebarItemExtended = {
            text: filename_year,
            collapsible: true,
            children: [],
        };
        const files_month = fs.readdirSync( filepath_year );
        for ( let filename_month of files_month ) {
            const filepath_month = path.join( filepath_year, filename_month );
            const monthSidebarItem: SidebarItemExtended = {
                text: filename_month,
                collapsible: true,
                children: [],
            };
            const files_day = fs.readdirSync( filepath_month );
            for ( let filename_day of files_day ) {
                const filepath_day = path.join( filepath_month, filename_day );
                const vue_filepath_day = filepath_day.replace(
                    filepath_day.split( '/' )[ 0 ],
                    ''
                );
                monthSidebarItem.children!.push( {
                    text: filename_day.replace( '.md', '' ),
                    link: vue_filepath_day,
                } );
            }
            dict.children!.push( monthSidebarItem );
        }
        __sidebar.push( dict );
    }
    return __sidebar;
}

export const sidebar_date = fileDisplay( 'docs/app' );