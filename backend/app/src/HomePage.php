<?php 

namespace Stageverslag\test;

use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;
// use App\src\Article\Article;
// use Stageverslag\test\Article;

use Page;

class HomePage extends Page {
    private static $db = [];

    private static $has_many = [
        'Articles' => Article::class,
    ];

    private static $owns = [
        'Articles'
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->addFieldToTab('Root.Tabs', GridField::create(
            'Articles',
            'Articles',
            $this->Articles(),
            GridFieldConfig_RecordEditor::create()
        ));
        return $fields;
    }
}