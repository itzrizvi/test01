module.exports = {
    nestedSectors: (objs, parentId = null) => {
        const lists = [];
        let items;
        if (parentId == null) {
            items = objs.filter(obj => obj.parent == null);
        } else {
            items = objs.filter(obj => String(obj.parent) == String(parentId));
        }

        for (let item of items) {
            lists.push({
                _id: item._id,
                title: item.name,
                value: item.name,
                children: module.exports.nestedSectors(objs, item._id)
            })
        }
        return lists;
    }
}