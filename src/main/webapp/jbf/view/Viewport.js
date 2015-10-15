Ext.define('JBF.view.Viewport', {
    extend: 'Ext.container.Viewport',
    uses: [
        'JBF.view.UserGrid',
        'JBF.view.DepartmentGrid'

    ],
    initComponent: function () {
        Ext.apply(this, {
            layout: {
                type: 'border'
            },
            items: [
                /*{
                    region: 'center',
                    xtype: 'tabpanel',
                    items: [
                        {
                            itemId: 'DepartmentManagementGridId',
                            title: 'Department Management',
                            xtype: 'DepartmentGrid'
                        }
                        ,
                        {
                            itemId: 'EmployeeManagementGridId',
                            title: 'Employee Management',
                            xtype: 'UserGrid',
                            reference: 'userGrid'
                        }



                    ]
                }*/{
                    //title: 'Main Content',
                	header :false,
                    collapsible: false,
                    region: 'center',
                    margin: '5 0 0 0',
                    html: '<div id="contentarea" class="container connectSortable ui-sortable ui-droppable" style="zoom: 0.8; min-height: 50px;"><!-- This is just a sample content --><div class="ui-draggable ui-dragbox-outlined"><div class="row clearfix"><div class="column full display" contenteditable="true"><h1>The Cafe</h1><p>Fresh roasted coffee, exclusive teas &amp; light meals</p></div></div><div class="row-tool" style="right: auto; left: -37px; display: block;"><div class="row-handle ui-sortable-handle"><i class="cb-icon-move"></i></div><div class="row-html"><i class="cb-icon-code"></i></div><div class="row-copy"><i class="cb-icon-plus"></i></div><div class="row-remove"><i class="cb-icon-cancel"></i></div></div></div><div class="ui-draggable"><div class="row clearfix"><div class="column half" contenteditable="true"><img src="images/cafe.jpg"></div><div class="column half" contenteditable="true"><p>Welcome to the website of the Cafe on the Corner. We are situated, yes you\'ve guessed it, on the corner of This Road and That Street in The Town.</p><p>We serve freshly brewed tea and coffee, soft drinks and a section of light meals and tasty treats and snacks. We are open for breakfast, lunch and afternoon tea from 8 am to 5 pm and unlike any other cafe in the town, we are open 7 days per week.</p></div></div><div class="row-tool" style="right: auto; left: -37px;"><div class="row-handle ui-sortable-handle"><i class="cb-icon-move"></i></div><div class="row-html"><i class="cb-icon-code"></i></div><div class="row-copy"><i class="cb-icon-plus"></i></div><div class="row-remove"><i class="cb-icon-cancel"></i></div></div></div><div class="ui-draggable"><div class="row clearfix"><div class="column full" contenteditable="true"><p>A truly family run business, we aim to create a cosy and friendly atmosphere in the cafe with Mum and Auntie doing the cooking and Dad and the (grown-up) children serving front of house. We look forward to welcoming you to the Cafe on the Corner very soon.</p></div></div><div class="row-tool" style="right: auto; left: -37px;"><div class="row-handle ui-sortable-handle"><i class="cb-icon-move"></i></div><div class="row-html"><i class="cb-icon-code"></i></div><div class="row-copy"><i class="cb-icon-plus"></i></div><div class="row-remove"><i class="cb-icon-cancel"></i></div></div></div></div>'
                    },{
                    header :false,
                    xtype: 'panel',
                    itemCls :'divSnippetList',
                    region: 'east',                    
                    width: '15%',
                    split: true,
                    collapsible: true,
                    collapsed: false,
                    
                    items:[{
                        xtype: 'dataview',
                        tpl: [
                            '<tpl for=".">',
                                '<div class="divSnippetListItem">',                                    
                                '<img src="images/{thumb}" />',                                    
                                '</div>',
                            '</tpl>'
                        ],
                       
                        itemSelector: 'div.dataview-multisort-item',
                        store: Ext.create('Ext.data.Store', {
                            autoLoad: true,
                            sortOnLoad: true,
                            fields: ['name', 'thumb', 'url', 'type'],
                            proxy: {
                                type: 'ajax',
                                url : 'view/leftpanel.json',
                                reader: {
                                    type: 'json',
                                    rootProperty: ''
                                }
                            }
                        })
                    }]
                }

            ]
        });
        this.callParent(arguments);
    }
});